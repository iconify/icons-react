import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.av0rywb2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.321 22.3h3.358a2 2 0 0 1 2 2a2 2 0 0 1-2 2H21.32m.001 0h3.358a2 2 0 0 1 2 2a2 2 0 0 1-2 2H21.32");
}

.ttosu8uah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.181 19.852V14.25l-5.333-.754l-.054 4.471l-4.848-.647L7.03 4.5L24 7.14v12.712m0 13.144V43.5l-5.819-2.693v-7.811m11.638-13.144V14.25l5.333-.754l.054 4.471l4.848-.647l.916-12.82L24 7.14v12.712m0 13.144V43.5l5.819-2.693v-7.811m.753-13.144H17.428v13.144h13.144zm-9.251 10.424V26.3");
}
</style><path class="ttosu8uah"/><path class="av0rywb2o"/>`,
		"fallback": "arcticons:trustmanager",
	});
}

export default Component;
