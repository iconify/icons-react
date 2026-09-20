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

.gf5awhzyq {
  fill: var(--svg-color--ff562d, #ff562d);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.sldlgv7ec {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 20a8 8 0 1 0 0-15.998A8 8 0 0 0 12 20M9.31 8A1.31 1.31 0 0 0 8 9.31v5.38A1.31 1.31 0 0 0 9.31 16h5.38A1.31 1.31 0 0 0 16 14.69V9.31A1.31 1.31 0 0 0 14.69 8z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="gf5awhzyq"/><path clip-rule="evenodd" class="sldlgv7ec"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:nls-background",
	});
}

export default Component;
