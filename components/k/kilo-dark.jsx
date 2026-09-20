import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g9nkajl4h {
  fill: var(--svg-color--eaeaea, #eaeaea);
  d: path("M0 0v256h256V0zm237.037 237.037H18.963V18.963h218.074zm-80.593-52.948h23.704v18.963H150.35l-12.868-12.868v-29.8h18.963zm42.667 0h-18.963v-23.704h-23.704v-18.963h29.8l12.867 12.868zm-80.592-27.644H99.556v-18.963h18.963zm-61.63-18.963h18.963v42.667h42.667v18.963H69.757l-12.868-12.868zM199.11 99.556v18.963h-61.63V99.556h21.193V75.852H137.48V56.889h27.288l12.868 12.868v29.799zM75.851 78.222h23.705l18.963 18.963v21.334H99.556V97.185H75.852v21.334H56.889v-61.63h18.963zm42.668 0H99.556V56.89h18.963z");
}
</style><path class="g9nkajl4h"/>`,
		"fallback": "logos:kilo-dark",
	});
}

export default Component;
