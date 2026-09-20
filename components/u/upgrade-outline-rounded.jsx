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
		"content": `<style>.io9zf1tws {
  fill: currentColor;
  d: path("M8 19q-.213 0-.356-.144t-.144-.357t.144-.356T8 18h8q.213 0 .356.144t.144.357t-.144.356T16 19zm3.643-3.528q-.143-.144-.143-.356V6.883L8.716 9.662q-.141.14-.332.133t-.341-.153q-.137-.134-.137-.34t.14-.348l3.389-3.389q.13-.13.27-.183q.138-.053.297-.053t.296.053q.137.052.268.183l3.407 3.408q.14.14.143.332q.003.191-.143.34q-.134.138-.341.138t-.347-.14L12.5 6.882v8.233q0 .212-.144.356t-.357.144t-.356-.144");
}
</style><path class="io9zf1tws"/>`,
		"fallback": "material-symbols-light:upgrade-outline-rounded",
	});
}

export default Component;
