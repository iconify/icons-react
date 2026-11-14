import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glewgqbdp.css';
import '../../css/d/d9dba9b9q.css';
import '../../css/h/hs60lhboe.css';
import '../../css/d/depdzl0up.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glewgqbdp"/><path class="d9dba9b9q"/><path class="hs60lhboe"/><path class="depdzl0up"/>`,
		"fallback": "devicon:qodo",
	});
}

export default Component;
