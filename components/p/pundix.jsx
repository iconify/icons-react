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
		"content": `<style>.y2_ndqb9m {
  fill: var(--svg-color--f2d30e, #f2d30e);
  d: path("M3 4.286L4.286 3l7.071 7.072l-1.285 1.285zm9.643 9.643l1.285-1.286L21 19.714L19.714 21zM10.714 12L12 10.714L13.286 12L12 13.286zm1.929-1.928L19.714 3L21 4.286l-7.071 7.071zM3 19.714l7.072-7.071l1.285 1.285L4.286 21z");
}
</style><path class="y2_ndqb9m"/>`,
		"fallback": "token-branded:pundix",
	});
}

export default Component;
