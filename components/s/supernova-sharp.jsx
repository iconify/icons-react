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
		"content": `<style>.n1pbtublt {
  d: path("m12.23 3.3l1.45 3.53l.23.55l.56-.23l3.52-1.46l.55-.23l-.23.55l-1.46 3.52l-.23.56l.55.23l3.53 1.45l.55.23l-.55.23l-3.53 1.45l-.55.23l.23.56l1.46 3.52l.23.55l-.55-.23l-3.52-1.46l-.56-.23l-.23.55l-1.45 3.53l-.23.55l-.23-.55l-1.45-3.53l-.23-.55l-.56.23l-3.52 1.46l-.55.23l.23-.55l1.46-3.52l.23-.56l-.55-.23l-3.53-1.45l-.55-.23l.55-.23l3.53-1.45l.55-.23l-.23-.56l-1.46-3.52l-.23-.55l.55.23l3.52 1.46l.56.23l.23-.55l1.45-3.53l.23-.55z");
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n1pbtublt"/><circle class="ons53cb4g"/></g>`,
		"fallback": "iconoven:supernova-sharp",
	});
}

export default Component;
