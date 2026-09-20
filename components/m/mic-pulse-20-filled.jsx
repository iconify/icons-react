import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xkhlzbw8w {
  fill: currentColor;
  d: path("M4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.706A5.5 5.5 0 0 1 9 14.5A4.5 4.5 0 0 1 4.5 10M12 5v4.6a5.5 5.5 0 0 0-2.79 3.393Q9.104 13 9 13a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0m7 9.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m-5.556-2a.5.5 0 0 1 .455.332l.629 1.758l.58-1.443a.5.5 0 0 1 .904-.05l.573 1.07H17a.5.5 0 1 1 0 1h-.714a.5.5 0 0 1-.441-.264l-.209-.39l-.672 1.673a.5.5 0 0 1-.935-.018l-.643-1.8l-.212.496a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.584-1.364a.5.5 0 0 1 .475-.303");
}
</style><path class="xkhlzbw8w"/>`,
		"fallback": "fluent:mic-pulse-20-filled",
	});
}

export default Component;
