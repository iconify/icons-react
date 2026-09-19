import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/j/j72dhibef.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI5KcpeyZ"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="j72dhibef"/></g></mask></defs><path mask="url(#SVGI5KcpeyZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:seven-key",
	});
}

export default Component;
