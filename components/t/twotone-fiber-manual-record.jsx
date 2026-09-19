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
		"content": `<style>.o5ckdcw5z {
  fill: currentColor;
  d: path("M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6");
}

.q71t33byz {
  fill: currentColor;
  d: path("M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="q71t33byz"/><path class="o5ckdcw5z"/>`,
		"fallback": "ic:twotone-fiber-manual-record",
	});
}

export default Component;
