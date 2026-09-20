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
		"content": `<style>.yshfbp1mf {
  fill: var(--svg-color--21201d, #21201d);
  fill-rule: evenodd;
  d: path("M12 21a9 9 0 0 0 6.933-14.74L6.26 18.934A8.97 8.97 0 0 0 12 21m-6.885-3.204L17.797 5.115A8.96 8.96 0 0 0 12 3a9 9 0 0 0-9 9c0 2.208.795 4.23 2.115 5.796");
}
</style><path clip-rule="evenodd" class="yshfbp1mf"/>`,
		"fallback": "token-branded:sai",
	});
}

export default Component;
