import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/c8jtaacin.css';
import '../../css/u/urwv5eb3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTFa8SbBO"><g class="wwvp95byt"><path class="c8jtaacin"/><path class="urwv5eb3p"/></g></mask></defs><path mask="url(#SVGTFa8SbBO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:message",
	});
}

export default Component;
