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
		"content": `<style>.w4xp6vxxv {
  fill: currentColor;
  d: path("M3 21L21 3v10.73h-1V5.422L5.421 20h8.695v1zm13.5 0v-4.884h1V21zm3 0v-4.884h1V21zm-6.786-8.292");
}
</style><path class="w4xp6vxxv"/>`,
		"fallback": "material-symbols-light:signal-cellular-pause-outline-sharp",
	});
}

export default Component;
