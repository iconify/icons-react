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
		"content": `<style>.foev6yjrg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C18.0751 1 23 5.92 23 12C23 18.08 18.0751 23 12 23C5.9249 23 1 18.08 1 12C1 5.92 5.9249 1 12 1Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nty17zasi {
  d: path("M9.5 13V9C9.5 8.45 9.9477 8 10.5 8H12C13.3807 8 14.5 9.12 14.5 10.5C14.5 11.88 13.3807 13 12 13H9.5ZM9.5 13V16M12 22C6.4772 22 2 17.52 2 12C2 6.48 6.4772 2 12 2C17.5228 2 22 6.48 22 12C22 17.52 17.5228 22 12 22Z");
}
</style><g class="nrj6p8qat"><path class="foev6yjrg"/><path class="nty17zasi"/></g>`,
		"fallback": "keyline-icons:parking-two-tone",
	});
}

export default Component;
