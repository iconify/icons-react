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
		"content": `<style>.dtm-zib2w {
  stop-color: var(--svg-color--5a10f5, #5a10f5);
}

.ft5dv1b6b {
  fill: none;
}

.lsi5-3j7d {
  stop-color: var(--svg-color--0fa, #0fa);
}

.ws4ue9bqp {
  d: path("M10.875 9.19L5.25 5.25l3.94 5.625L3 12l6.19 1.125l-3.94 5.065l5.625-3.38L12 21l1.125-6.19l5.905 3.38l-4.78-5.065L21 12l-6.75-1.125l4.5-5.625l-5.625 3.94L12 3z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGODi16bLM)" class="ws4ue9bqp"/><defs><linearGradient id="SVGODi16bLM" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="lsi5-3j7d"/><stop offset="1" class="dtm-zib2w"/></linearGradient></defs></g>`,
		"fallback": "token-branded:rdnt",
	});
}

export default Component;
