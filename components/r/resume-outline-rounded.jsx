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
		"content": `<style>.j_t7cvbdu {
  fill: currentColor;
  d: path("M6 17V7q0-.425.288-.712T7 6t.713.288T8 7v10q0 .425-.288.713T7 18t-.712-.288T6 17m5.525.1l7.05-4.25q.25-.15.363-.375T19.05 12t-.112-.475t-.363-.375l-7.05-4.25q-.125-.075-.262-.1T11 6.775q-.4 0-.7.288t-.3.712v8.45q0 .425.3.713t.7.287q.125 0 .263-.025t.262-.1M12 14.475v-4.95L16.125 12zM12 12");
}
</style><path class="j_t7cvbdu"/>`,
		"fallback": "material-symbols:resume-outline-rounded",
	});
}

export default Component;
