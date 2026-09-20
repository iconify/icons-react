import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.doqtp_b0q {
  fill: var(--svg-color--4551ff, #4551FF);
  d: path("M168.87 0c-46.26 0-84.435 36.379-86.68 82.19C36.378 84.434 0 122.16 0 168.42c0 47.607 39.074 86.68 86.68 86.68h134.288c19.313 0 35.032-15.719 35.032-34.582V86.681C256 38.625 216.926 0 168.87 0ZM75.902 216.926c-17.965-4.49-32.337-18.863-36.828-36.379c-.45-2.245-.45-3.143-.899-5.39h37.727v41.77Zm45.81 1.348h-35.48v-81.74h35.48v81.74Zm48.056 0h-35.48V69.164h35.48v149.11Zm48.057-7.186c0 4.042-3.144 7.635-7.186 7.635h-28.744V97.909h35.93v113.179Z");
}
</style><path class="doqtp_b0q"/>`,
		"fallback": "logos:kissmetrics",
	});
}

export default Component;
