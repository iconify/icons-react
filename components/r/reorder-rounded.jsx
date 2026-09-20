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
		"content": `<style>.uxozlibay {
  fill: currentColor;
  d: path("M4 19q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-4q-.425 0-.712-.288T3 14t.288-.712T4 13h16q.425 0 .713.288T21 14t-.288.713T20 15zm0-4q-.425 0-.712-.288T3 10t.288-.712T4 9h16q.425 0 .713.288T21 10t-.288.713T20 11zm0-4q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7z");
}
</style><path class="uxozlibay"/>`,
		"fallback": "material-symbols:reorder-rounded",
	});
}

export default Component;
