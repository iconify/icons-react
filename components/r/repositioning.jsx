import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/di2z6-b7f.css';
import '../../css/k/ka6wwks0b.css';
import '../../css/p/p45glrj-o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7drP2cSq"><g class="wwvp95byt"><path class="di2z6-b7f"/><path class="ka6wwks0b"/><path class="p45glrj-o"/></g></mask></defs><path mask="url(#SVG7drP2cSq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:repositioning",
	});
}

export default Component;
