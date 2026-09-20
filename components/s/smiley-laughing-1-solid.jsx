import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c28n9ra-f.css';
import '../../css/a/avmmhdxkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c28n9ra-f"/><path class="avmmhdxkt"/>`,
		"fallback": "streamline-plump:smiley-laughing-1-solid",
	});
}

export default Component;
