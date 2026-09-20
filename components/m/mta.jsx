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
		"content": `<style>.mfcgzwbks {
  fill: var(--svg-color--ffb634, #ffb634);
  d: path("M5.813 4.125H3v11.25h3.375V8.87c-.006-.812-.017-2.496 1.969-2.496c1.836 0 1.969 1.673 1.969 2.537v6.463h3.374V9.899c0-1.648 0-3.524 1.97-3.524c1.723 0 1.968 1.412 1.968 2.608v6.392h3.372V9.062c.003-.956.006-2.204-.561-3.12c-.247-.442-1.09-1.817-3.373-1.817c-1.165 0-2.787.176-3.722 1.972c-.22-.532-.994-1.972-3.591-1.972c-2.161 0-2.949 1.093-3.325 1.616l-.05.069zM21 17.062H3v2.813h18z");
}
</style><path class="mfcgzwbks"/>`,
		"fallback": "token-branded:mta",
	});
}

export default Component;
