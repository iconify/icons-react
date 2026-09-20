import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":238};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.az3etcb5m {
  fill: var(--svg-color--1f34ab, #1f34ab);
  d: path("m117.846 49.889l46.051 34.538L48.769 237.932L2.718 203.393z");
}

.p24-zy-5p {
  fill: var(--svg-color--0468ff, #0468ff);
  d: path("M140.872 0c34.66 0 64.174 11.477 85.111 32.415C245.464 51.895 256 78.235 256 105.535c0 27.298-10.536 53.638-30.017 73.118c-20.728 20.729-49.861 32.185-84.073 32.412l-1.038.003v-57.564c19.82 0 34.6-5.748 44.407-15.555c8.502-8.501 13.157-20.138 13.157-32.415s-4.655-23.913-13.157-32.415c-9.708-9.709-24.292-15.44-43.814-15.553l-.593-.002z");
}

.puocg9bhs {
  fill: var(--svg-color--85aeff, #85aeff);
  d: path("m51.487 92.663l38.376 76.752l-51.487 25.743L0 118.406z");
}
</style><path class="p24-zy-5p"/><path class="az3etcb5m"/><path class="puocg9bhs"/>`,
		"fallback": "logos:processing",
	});
}

export default Component;
