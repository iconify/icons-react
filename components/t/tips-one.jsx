import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/v/vw3aex42z.css';
import '../../css/y/yprxxxbxg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhnLLNKRO"><g class="gopnm44um"><path class="vw3aex42z"/><path class="yprxxxbxg"/></g></mask></defs><path mask="url(#SVGhnLLNKRO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tips-one",
	});
}

export default Component;
