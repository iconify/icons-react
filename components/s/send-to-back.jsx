import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o76v0vh3i.css';
import '../../css/x/xdmoomhwk.css';
import '../../css/j/jc6ju62gl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVHGVby4n"><g class="v3_i3wktz"><path class="o76v0vh3i"/><path class="xdmoomhwk"/><path class="jc6ju62gl"/></g></mask></defs><path mask="url(#SVGVHGVby4n)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:send-to-back",
	});
}

export default Component;
