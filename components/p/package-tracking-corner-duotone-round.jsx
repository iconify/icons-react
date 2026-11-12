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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nkgtnkjzg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8v8a4 4 0 0 0 4 4M4 8l1-2c.613-1.226 1.774-2 3-2h8c1.226 0 2.387.774 3 2l1 2M4 8h16m-3 8h.01M17 21c-2-2-4-4-4-5a4 4 0 1 1 8 0c0 1-2 3-4 5");
}

.yftbyvplx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4.106 5.553C4.848 4.069 6.307 3 8 3h8c1.693 0 3.152 1.069 3.894 2.553l1 2A1 1 0 0 1 20 9H4a1 1 0 0 1-.894-1.447Zm10.707 14.658a33 33 0 0 1-1.322-1.435C12.878 18.061 12 16.985 12 16a5 5 0 0 1 10 0c0 .985-.878 2.061-1.491 2.776q-.64.737-1.322 1.435c-.488.504-.984 1-1.48 1.496a1 1 0 0 1-1.414 0c-.496-.496-.992-.992-1.48-1.496");
}
</style><g class="ft5dv1b6b"><path class="yftbyvplx"/><path class="nkgtnkjzg"/></g>`,
		"fallback": "coolicons:package-tracking-corner-duotone-round",
	});
}

export default Component;
