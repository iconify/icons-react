import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnckipbnp.css';
import '../../css/h/hlxdn7yed.css';
import '../../css/j/j92rn7wey.css';
import '../../css/f/fy7t5zukz.css';
import '../../css/n/nn4n7g3zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnckipbnp wm-k"/><path class="hlxdn7yed wm-a"/><path class="j92rn7wey wm-a"/><path class="fy7t5zukz wm-a"/><path class="nn4n7g3zi wm-a"/>`,
		"fallback": "withicons-bauhaus:microscope",
	});
}

export default Component;
