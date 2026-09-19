import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.do-864bca {
  fill: currentColor;
  d: path("M12 4L2 20h20zm0 3.77L18.39 18H5.61z");
}

.qs6wprbpf {
  fill: currentColor;
  d: path("M12 7.77L5.61 18h12.78z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qs6wprbpf"/><path class="do-864bca"/>`,
		"fallback": "ic:twotone-change-history",
	});
}

export default Component;
