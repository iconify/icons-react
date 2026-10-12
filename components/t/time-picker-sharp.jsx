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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.gj_nebbhz {
  d: path("M12 7.25V12l-3 2m5.95.51l5.35 1.98l.7.26l-.72.22l-1.81.56l-.72.22l-.22.72l-.56 1.81l-.22.72l-.26-.7l-1.98-5.35l-.26-.7z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dldnhmbjp"/><path class="gj_nebbhz"/></g>`,
		"fallback": "iconoven:time-picker-sharp",
	});
}

export default Component;
