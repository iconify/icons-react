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
		"content": `<style>.a2o09kb0k {
  d: path("M30 26h4v32h-4z");
}

.fcq8r33rh {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--62727a, #62727a);
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.uzm2mooko {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--62727a, #62727a);
}

.xq6jaeb2t {
  cx: 32px;
  cy: 32px;
  r: 4px;
}

.yme7d_9eh {
  d: path("m31.7 26l3.8 1l-6.2 23l-3.8-1z");
}
</style><circle class="fcq8r33rh"/><g class="n1mjunbsu"><path class="a2o09kb0k"/><path class="yme7d_9eh"/><circle class="xq6jaeb2t"/></g><circle class="uzm2mooko"/>`,
		"fallback": "emojione:six-thirty",
	});
}

export default Component;
