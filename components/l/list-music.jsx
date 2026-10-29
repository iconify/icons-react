import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt79rrb-y.css';
import '../../css/t/th0jcu54c.css';
import '../../css/u/ugxrr-hjp.css';
import '../../css/n/n2q0nac6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt79rrb-y wm-k"/><path class="th0jcu54c wm-a"/><path class="ugxrr-hjp wm-a"/><path class="n2q0nac6i wm-a"/>`,
		"fallback": "withicons-bauhaus:list-music",
	});
}

export default Component;
