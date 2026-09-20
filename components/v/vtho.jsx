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
		"content": `<style>.e2vpf0b8u {
  fill: var(--svg-color--2a5285, #2a5285);
  d: path("M6.316 12.947L10.166 3h5.152l-4.4 7.105h3.936L6.808 21l3.358-8.053z");
}

.ft5dv1b6b {
  fill: none;
}

.wph_fybml {
  fill: var(--svg-color--c1cddc, #c1cddc);
  d: path("M17.684 3H15.22l-5.646 7.796h1.772L6.828 21l10.42-11.842h-4.414z");
}
</style><g class="ft5dv1b6b"><path class="wph_fybml"/><path class="e2vpf0b8u"/></g>`,
		"fallback": "token-branded:vtho",
	});
}

export default Component;
