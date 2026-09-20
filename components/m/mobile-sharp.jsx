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
		"content": `<style>.tg3zj5ppa {
  fill: currentColor;
  d: path("M12.713 5.713Q13 5.425 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="tg3zj5ppa"/>`,
		"fallback": "material-symbols:mobile-sharp",
	});
}

export default Component;
