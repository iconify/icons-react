import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a9feyacll.css';
import '../../css/t/t93dzlbjh.css';
import '../../css/j/jn2jlqbfe.css';
import '../../css/n/n0rx2i3tg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG60KTneaR"><g class="rohhhzb0l"><path class="a9feyacll"/><path class="t93dzlbjh"/><path class="jn2jlqbfe"/><path class="n0rx2i3tg"/></g></mask></defs><path mask="url(#SVG60KTneaR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reverse-lens-one",
	});
}

export default Component;
