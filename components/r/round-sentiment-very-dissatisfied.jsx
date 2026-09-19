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
		"content": `<style>.jizi7fb6h {
  fill: currentColor;
  d: path("M12 13.5c-2.03 0-3.8 1.11-4.75 2.75c-.19.33.06.75.44.75h8.62c.38 0 .63-.42.44-.75A5.49 5.49 0 0 0 12 13.5m-3.65-2.03l.53-.53l.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.53-.53l.53-.53c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.53.53l-.53-.53a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.53.53l-.53.53c-.29.29-.29.77 0 1.06s.77.29 1.06 0M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.65-11.71l-.53.53l-.53-.53a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.53.53l-.53.53c-.29.29-.29.77 0 1.06s.77.29 1.06 0l.53-.53l.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.53-.53l.53-.53c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0");
}
</style><path class="jizi7fb6h"/>`,
		"fallback": "ic:round-sentiment-very-dissatisfied",
	});
}

export default Component;
