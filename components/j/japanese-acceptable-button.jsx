import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i3znphbme {
  d: path("M48 18v4.9h-3.6v21.3c0 2.7-.5 4.1-2.4 5c-1.8.8-4.5.9-8.3.9c-.2-1.5-1-3.7-1.7-5.1c2.6.2 5.4.2 6.2.1c.8 0 1.1-.3 1.1-1V22.9H16V18z");
}

.ipd961bkq {
  fill: var(--svg-color--eda454, #eda454);
  d: path("M62 32c0 16.5-13.5 30-30 30S2 48.5 2 32S15.5 2 32 2s30 13.5 30 30");
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.y8qdbrbwu {
  d: path("M19 26.5v17h4.6v-2.7H35V26.5zm11.1 9.9h-6.4v-5.5h6.4z");
}
</style><path class="ipd961bkq"/><g class="n1mjunbsu"><path class="i3znphbme"/><path class="y8qdbrbwu"/></g>`,
		"fallback": "emojione:japanese-acceptable-button",
	});
}

export default Component;
