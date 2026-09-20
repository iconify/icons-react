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
		"content": `<style>.i3w_4ac0z {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L5.293 6H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h2.607a.5.5 0 0 1 .34.133l3.873 3.594c.64.594 1.68.14 1.68-.733v-4.287l5.146 5.147a.5.5 0 0 0 .708-.708l-2.565-2.564zm13.106 2.52a8.004 8.004 0 0 1 .656 9.83l-.721-.723a7.004 7.004 0 0 0-.68-8.44a.5.5 0 1 1 .745-.667m-1.2 2.584a5.5 5.5 0 0 1 .041 5.43l-.742-.742a4.5 4.5 0 0 0-.165-4.188a.5.5 0 1 1 .866-.5M12 3.006V9.88L7.246 5.125l3.074-2.852c.64-.594 1.68-.14 1.68.733");
}
</style><path class="i3w_4ac0z"/>`,
		"fallback": "fluent:speaker-off-20-filled",
	});
}

export default Component;
