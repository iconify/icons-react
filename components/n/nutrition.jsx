import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bzco58gwi.css';
import '../../css/q/q7kngdcwr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeK9TWn0B"><g class="rohhhzb0l"><path clip-rule="evenodd" class="bzco58gwi"/><path class="q7kngdcwr"/></g></mask></defs><path mask="url(#SVGeK9TWn0B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nutrition",
	});
}

export default Component;
