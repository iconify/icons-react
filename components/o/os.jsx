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
		"content": `<style>.dbszn56_q {
  fill: var(--svg-color--7853fe, #7853fe);
  fill-rule: evenodd;
  d: path("M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-18a9 9 0 0 0 0 18M7.235 9.618v-.53L12 6.176l4.765 2.912v.53L12 12.529zm1.06-.265L12 7.235l3.706 2.118L12 11.47zm2.117-.53l.794-.529l2.647 1.588l-.794.53zm-3.177 2.648v.794L12 14.912l4.765-2.647v-.794L12 14.118zm0 3.44v-.793L12 16.765l4.765-2.647v.794L12 17.559z");
}
</style><path clip-rule="evenodd" class="dbszn56_q"/>`,
		"fallback": "token-branded:os",
	});
}

export default Component;
