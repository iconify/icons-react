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
		"content": `<style>.j9lo0nhpg {
  fill: currentColor;
  d: path("M12.5 16c0-.711.15-1.388.417-2H4.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22q1.005 0 1.906-.123l-.046-.02a1.5 1.5 0 0 1-.725-1.984a1.6 1.6 0 0 1 .381-.498c.102-.096.235-.208.374-.325l.61-.516zM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M17.503 12a4 4 0 0 0-4 4v3l-.95.8c-.307.26-.46.39-.507.491a.5.5 0 0 0 .242.662c.1.047.302.047.704.047h9.02c.403 0 .604 0 .705-.047a.5.5 0 0 0 .242-.662c-.047-.101-.2-.231-.508-.49L21.503 19v-3a4 4 0 0 0-4-4m1.5 10c-.219.583-.808 1-1.5 1c-.693 0-1.282-.417-1.5-1z");
}
</style><path class="j9lo0nhpg"/>`,
		"fallback": "fluent:person-alert-24-filled",
	});
}

export default Component;
