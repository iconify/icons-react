import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdnd-zb2u.css';
import '../../css/h/h9bf_0kkl.css';
import '../../css/y/ybv0jkb3k.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k3u9sabwd.css';
import '../../css/x/x33u4edzg.css';
import '../../css/r/rbbwe-b9f.css';
import '../../css/p/pa199p7zy.css';
import '../../css/o/obp13b47j.css';
import '../../css/d/deu_dnagx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG2EjiKdQs"><path class="pdnd-zb2u"/></clipPath><path id="SVGUKPkIcnA" class="h9bf_0kkl"/></defs><g clip-path="url(#SVG2EjiKdQs)"><path class="ybv0jkb3k"/></g><use href="#SVGUKPkIcnA" class="d2kvgvbvc"/><path class="k3u9sabwd"/><path class="x33u4edzg"/><use href="#SVGUKPkIcnA" class="d2kvgvbvc"/><path class="rbbwe-b9f"/><path class="pa199p7zy"/><path class="obp13b47j"/><path class="deu_dnagx"/>`,
		"fallback": "devicon:livewire-wordmark",
	});
}

export default Component;
