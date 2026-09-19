import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ig_8ksb7z {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M6.2 57.8C1 52.7.6 44.6 5.3 39.9l17.1-17.1l18.8 18.8l-17.1 17.1c-4.7 4.7-12.8 4.3-17.9-.9");
}

.v-77m-bqt {
  fill: var(--svg-color--42ade2, #42ade2);
  d: path("M58.3 26.8c5.3-5.3 4.9-14.3-1-20.1C51.5.9 42.5.5 37.2 5.7L24.4 18.5l-3.7 3.7l-.1.1c-.7.7-.7 1.9 0 2.6L39 43.3c.7.7 1.8.7 2.6 0l.1-.1l3.7-3.7z");
}
</style><path class="ig_8ksb7z"/><path class="v-77m-bqt"/>`,
		"fallback": "emojione:pill",
	});
}

export default Component;
