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
		"content": `<style>.s6iwyub8g {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zm2.952-3.432q.24-.24.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24t.568-.24m0-4q.24-.24.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24t.568-.24m0-4q.24-.24.24-.568t-.24-.568T8 7.192t-.568.24t-.24.568t.24.568t.568.24t.568-.24M15 9h4l-4-4z");
}
</style><path class="s6iwyub8g"/>`,
		"fallback": "material-symbols-light:summarize",
	});
}

export default Component;
