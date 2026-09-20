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
		"content": `<style>.kfx2a4b4p {
  fill: currentColor;
  d: path("M10 22v-6.225L11.65 11h8.7L22 15.775V22h-2v-1.5h-8V22zm1.85-7h8.3l-.875-2.5h-6.55zm1.65 3.75q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m5 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M1 20v-3h2V4h17v5h-9.775L8 15.3V20z");
}
</style><path class="kfx2a4b4p"/>`,
		"fallback": "material-symbols:laptop-car-sharp",
	});
}

export default Component;
