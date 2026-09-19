import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/yjbtnjdms.css';
import '../../css/f/fisgm7yyi.css';
import '../../css/e/eg0sa4gfy.css';
import '../../css/f/fq45ilesh.css';
import '../../css/c/cy42yib6n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxkVDAkNY"><g class="wwvp95byt"><path class="yjbtnjdms"/><path class="fisgm7yyi"/><path class="eg0sa4gfy"/><path class="fq45ilesh"/><path class="cy42yib6n"/></g></mask></defs><path mask="url(#SVGxkVDAkNY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:market-analysis",
	});
}

export default Component;
