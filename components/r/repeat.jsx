import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl_7l0b6o.css';
import '../../css/b/bjb_koami.css';
import '../../css/f/fm4je1qry.css';
import '../../css/m/mmzel9bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl_7l0b6o wm-k"/><path class="bjb_koami wm-k"/><path class="fm4je1qry wm-a"/><path class="mmzel9bis wm-a"/>`,
		"fallback": "withicons-bauhaus:repeat",
	});
}

export default Component;
