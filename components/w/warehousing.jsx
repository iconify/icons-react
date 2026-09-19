import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f69ughbml.css';
import '../../css/n/nk4ez9z6n.css';
import '../../css/h/h79q5vbot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbo1IqbPt"><g class="rohhhzb0l"><path class="f69ughbml"/><circle class="nk4ez9z6n"/><path class="h79q5vbot"/></g></mask></defs><path mask="url(#SVGbo1IqbPt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:warehousing",
	});
}

export default Component;
