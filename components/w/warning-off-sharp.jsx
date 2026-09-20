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
		"content": `<style>.fjqlm7b5h {
  fill: currentColor;
  d: path("M12.713 17.713Q13 17.425 13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18t.713-.288m9.162 1.338l-12.5-12.5L12 2zm-1.4 4.25l-2.3-2.3H1l6.3-10.875L.675 3.5L2.1 2.075l19.8 19.8zM11 15h1.175L11 13.825z");
}
</style><path class="fjqlm7b5h"/>`,
		"fallback": "material-symbols:warning-off-sharp",
	});
}

export default Component;
