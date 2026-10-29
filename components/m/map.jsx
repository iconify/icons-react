import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkcjtgbqv.css';
import '../../css/s/s9b9x4b1t.css';
import '../../css/v/vysl2zzjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkcjtgbqv wm-k"/><path class="s9b9x4b1t wm-a"/><path class="vysl2zzjq wm-k"/>`,
		"fallback": "withicons-bauhaus:map",
	});
}

export default Component;
