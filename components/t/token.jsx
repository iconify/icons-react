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
		"content": `<style>.uco2a0b2w {
  fill: currentColor;
  d: path("M9.196 9.866L4.031 7.002L12 2.577l7.97 4.425l-5.166 2.864q-.518-.639-1.248-1.002T12 8.5t-1.556.364t-1.248 1.001M11.5 21.143l-8-4.43V7.837l5.221 2.932q-.113.308-.167.603T8.5 12q0 1.298.854 2.277t2.146 1.214zm-1.278-7.364Q9.5 13.056 9.5 12t.722-1.778T12 9.5t1.778.722T14.5 12t-.722 1.778T12 14.5t-1.778-.722m2.278 7.364v-5.651q1.292-.235 2.146-1.214T15.5 12q0-.333-.054-.628t-.167-.603L20.5 7.837v8.875z");
}
</style><path class="uco2a0b2w"/>`,
		"fallback": "material-symbols-light:token",
	});
}

export default Component;
