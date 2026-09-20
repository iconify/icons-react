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

.jz_s4sbhg {
  fill: var(--svg-color--000, #000);
  d: path("M5.2 10.4h2a.8.8 0 0 1 .8.8v.4a.2.2 0 0 0 .4 0v-.4A1.2 1.2 0 0 0 7.2 10h-2A1.2 1.2 0 0 0 4 11.2v.4a.2.2 0 0 0 .4 0v-.4c0-.44.36-.8.8-.8m-.8 2a.2.2 0 1 0-.4 0v.4A1.2 1.2 0 0 0 5.2 14h2a1.2 1.2 0 0 0 1.2-1.2v-.4a.2.2 0 1 0-.4 0v.4a.8.8 0 0 1-.8.8h-2a.8.8 0 0 1-.8-.8zm5.252-2.332a.2.2 0 0 1 .28-.016l2 1.8a.2.2 0 0 1 0 .296l-2 1.8a.2.2 0 0 1-.264-.296L11.5 12l-1.832-1.652a.2.2 0 0 1-.016-.28m4.7.004a.226.226 0 0 1-.016.3L12.657 12l-.256-.32l1.68-1.628c.08-.08.2-.068.272.02m0 3.856a.23.23 0 0 0-.016-.3L12.657 12l-.256.32l1.68 1.628c.08.08.2.068.272-.02M15.6 10.2c0-.112.088-.2.2-.2h3c.828 0 1.2.372 1.2 1.2c0 .368-.18.628-.42.792c.24.16.42.428.42.808c0 .704-.496 1.2-1.2 1.2h-3a.2.2 0 1 1 0-.4h3c.484 0 .8-.316.8-.8c0-.36-.28-.568-.612-.6H15.8a.2.2 0 1 1 0-.4h2.992a1 1 0 0 1 .188 0c.32-.04.62-.252.62-.6c0-.616-.184-.8-.8-.8h-3a.2.2 0 0 1-.2-.2");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w1oxmxbbj {
  fill: var(--svg-color--27e9af, #27e9af);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="w1oxmxbbj"/><path class="jz_s4sbhg"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:oxb-background",
	});
}

export default Component;
