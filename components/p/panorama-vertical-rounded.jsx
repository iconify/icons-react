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
		"content": `<style>.n0gr_eccv {
  fill: currentColor;
  d: path("M5 22q-.425 0-.712-.288T4 21q0-.2.238-.888t.512-1.837t.513-2.712T5.5 12t-.238-3.562t-.512-2.713t-.513-1.837T4 3q0-.425.288-.712T5 2h14q.425 0 .713.288T20 3q0 .2-.238.888t-.512 1.837t-.513 2.713T18.5 12t.238 3.563t.512 2.712t.513 1.838T20 21q0 .425-.288.713T19 22z");
}
</style><path class="n0gr_eccv"/>`,
		"fallback": "material-symbols:panorama-vertical-rounded",
	});
}

export default Component;
