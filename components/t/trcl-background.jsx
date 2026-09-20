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

.i45z-924x {
  stop-color: var(--svg-color--101bab, #101bab);
}

.mbuqjptzl {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.176 11.294L4 12.235c0-3.294 2.325-7.764 7.5-7.764c2.688 0 4.65 1.03 6.118 2.447l.447-.09l-.245.297A7.95 7.95 0 0 1 20 12.71c0 3.577-1.097 6.033-1.648 6.819c-2.588-.941-3.059-3.294-3.059-4.235c0-.537.146-.927.311-1.35c.188-.5.381-1.003.381-1.944c0-.47-.103-1.647-.814-2.857l-4.583 3.497v.07a2.118 2.118 0 1 1-1.242-1.929l5.237-2.447c-.772-.847-1.986-1.51-3.788-1.51c-3.765 0-5.303 2.983-5.619 4.47");
}

.ngq20kxei {
  stop-color: var(--svg-color--111b38, #111b38);
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVG7feUAecS)" class="r4i437pya"/><path class="mbuqjptzl"/></g><defs><linearGradient id="SVG7feUAecS" x1="4.654" x2="19.477" y1="9.177" y2="9.647" gradientUnits="userSpaceOnUse"><stop class="i45z-924x"/><stop offset="1" class="ngq20kxei"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:trcl-background",
	});
}

export default Component;
