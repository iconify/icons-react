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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.rjsm6lbvy {
  fill: var(--svg-color--c1ccf7, #c1ccf7);
  d: path("M24 0H0v24h24z");
}

.u15s394_n {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M16.991 16.991a7.06 7.06 0 1 1-9.983-9.984a7.06 7.06 0 0 1 9.983 9.984m.666.666A8 8 0 1 1 6.343 6.344a8 8 0 0 1 11.314 11.313m.46-5.657a6.118 6.118 0 1 1-12.234 0a6.118 6.118 0 0 1 12.235 0M12 7.294L9.177 12L12 13.647L14.824 12zm0 7.059L9.177 12.47L12 16.706l2.824-4.235z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="rjsm6lbvy"/><path clip-rule="evenodd" class="u15s394_n"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:seth-background",
	});
}

export default Component;
